from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup
from PIL import Image
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from forex_python.converter import CurrencyRates

app = Flask(__name__)

# Step 1: Web Scraping Pinterest Moodboards
def scrape_pinterest_board(board_url):
    response = requests.get(board_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    images = soup.find_all('img')
    image_urls = [img['src'] for img in images if 'src' in img.attrs]
    return image_urls

# Step 2: Image Analysis
def analyze_image(img_url, model):
    img_response = requests.get(img_url, stream=True)
    img = Image.open(img_response.raw).convert('RGB')
    img = img.resize((224, 224))
    
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])
    img = transform(img)
    img = img.unsqueeze(0)
    
    model.eval()
    with torch.no_grad():
        preds = model(img)
    
    _, indices = torch.topk(preds, 3)
    return indices[0].tolist()

# Step 3: Product Matching
product_catalog = {
    'product1': {
        'tags': ['red', 'dress', 'floral'], 
        'image_url': 'https://i.pinimg.com/736x/ac/b9/7a/acb97a31b7709f02a2ccb76fd403f0af.jpg',
        'product_url': 'https://www.myntra.com/dress-product1'
    },
    'product2': {
        'tags': ['blue', 'jeans', 'denim'], 
        'image_url': 'https://example.com/jeans.jpg',
        'product_url': 'https://www.myntra.com/jeans-product2'
    },
    'product3': {
        'tags': ['black', 'shirt', 'cotton'], 
        'image_url': 'https://example.com/shirt.jpg',
        'product_url': 'https://www.myntra.com/shirt-product3'
    }
}

def match_products(features, catalog):
    matched_products = []
    for feature_set in features:
        for product, data in catalog.items():
            if any(tag in feature_set for tag in data['tags']):
                matched_products.append({
                    'product': product,
                    'image_url': data['image_url'],
                    'product_url': data['product_url']
                })
    return matched_products

# Step 4: Recommendation System
def build_recommendation_model():
    data = pd.DataFrame({
        'user_id': [1, 1, 1, 2, 2],
        'product_id': [1, 2, 3, 1, 2],
        'rating': [5, 4, 3, 5, 4]
    })
    user_item_matrix = data.pivot(index='user_id', columns='product_id', values='rating').fillna(0)
    similarity_matrix = cosine_similarity(user_item_matrix)
    return similarity_matrix, user_item_matrix

similarity_matrix, user_item_matrix = build_recommendation_model()

def recommend_products(profile_url, matched_products):
    # Extract user profile identifier from the URL
    try:
        user_profile_id = profile_url.rstrip('/').split('/')[-1]
    except IndexError:
        user_profile_id = "default_user"  # Default to some identifier if the extraction fails
    
    # Simulate recommendation logic based on user profile identifier
    user_index = 0  # Default to the first user for simplicity in this example
    similar_users = similarity_matrix[user_index]
    similar_user_index = similar_users.argsort()[-2]
    recommended_products = user_item_matrix.iloc[similar_user_index].sort_values(ascending=False).index.tolist()
    recommendations = [product for product in matched_products if int(product['product'][-1]) in recommended_products]
    return recommendations

# Load the model (using torchvision ResNet50 as an example)
model = models.resnet50(pretrained=True)
model.fc = torch.nn.Linear(model.fc.in_features, 1000)  # Adjust the output layer as per your needs

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        board_url = request.form['board_url']
        profile_url = request.form['profile_url']
        
        # Scrape Pinterest board
        image_urls = scrape_pinterest_board(board_url)
        
        # Analyze images
        features = [analyze_image(url, model) for url in image_urls]
        
        # Match products
        matched_products = match_products(features, product_catalog)
        
        # Get recommendations
        recommendations = recommend_products(profile_url, matched_products)
        
        # Convert prices to INR
        c = CurrencyRates()
        for recommendation in recommendations:
            recommendation['price'] = f'₹{int(c.convert("USD", "INR", float(recommendation["price"][1:])))}'
        
        # Sample data to display (replace with real data)
        recommendations = [
            {'product': 'Red Floral Dress', 'image_url': 'https://example.com/dress.jpg', 'product_url': 'https://www.myntra.com/dress-product1', 'price': '₹2499'},
            {'product': 'Blue Denim Jeans', 'image_url': 'https://example.com/jeans.jpg', 'product_url': 'https://www.myntra.com/jeans-product2', 'price': '₹2999'},
            {'product': 'Black Cotton Shirt', 'image_url': 'https://example.com/shirt.jpg', 'product_url': 'https://www.myntra.com/shirt-product3', 'price': '₹1999'}
        ]
    
        return render_template('recommendations.html', recommendations=recommendations)
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
