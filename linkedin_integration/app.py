from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///linkedin_integration.db'
db = SQLAlchemy(app)

class Brand(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    linkedin_profile = db.Column(db.String(200), nullable=False)
    website_link = db.Column(db.String(200), nullable=True)
    best_selling_products = db.Column(db.Text, nullable=True)

class JobListing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    brand_id = db.Column(db.Integer, db.ForeignKey('brand.id'), nullable=False)

class Campaign(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    brand_id = db.Column(db.Integer, db.ForeignKey('brand.id'), nullable=False)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/showcase', methods=['GET', 'POST'])
def showcase():
    if request.method == 'POST':
        name = request.form['name']
        linkedin_profile = request.form['linkedin_profile']
        website_link = request.form.get('website_link')
        best_selling_products = request.form.get('best_selling_products')

        new_brand = Brand(
            name=name,
            linkedin_profile=linkedin_profile,
            website_link=website_link,
            best_selling_products=best_selling_products
        )
        db.session.add(new_brand)
        db.session.commit()
        return redirect(url_for('showcase'))

    brands = Brand.query.all()
    return render_template('showcase.html', brands=brands)

@app.route('/add_brand')
def add_brand():
    return render_template('add_brand.html')

@app.route('/marketing', methods=['GET', 'POST'])
def marketing():
    if request.method == 'POST':
        title = request.form['title']
        brand_id = request.form['brand_id']
        description = request.form['description']

        new_job = JobListing(title=title, brand_id=brand_id, description=description)
        db.session.add(new_job)
        db.session.commit()
        return redirect(url_for('marketing'))

    job_listings = JobListing.query.all()
    brands = Brand.query.all()
    return render_template('marketing.html', job_listings=job_listings, brands=brands)

@app.route('/add_job')
def add_job():
    brands = Brand.query.all()
    return render_template('add_job.html', brands=brands)

@app.route('/add_campaign')
def add_campaign():
    brands = Brand.query.all()
    return render_template('add_campaign.html', brands=brands)

@app.route('/jobs')
def jobs():
    job_listings = JobListing.query.all()
    return render_template('jobs.html', job_listings=job_listings)

if __name__ == '__main__':
    app.run(debug=True)
