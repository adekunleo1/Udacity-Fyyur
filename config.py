from settings import db_user, db_password, db_name
import os
SECRET_KEY = os.urandom(32)
# Grabs the folder where the script runs.
basedir = os.path.abspath(os.path.dirname(__file__))

# Enable debug mode.
DEBUG = True

# Connect to the database


# TODO IMPLEMENT DATABASE URL
SQLALCHEMY_DATABASE_URL = f'postgresql://{Udacity-FYYUR}:{password}@127.0.0.1:5000/{postgres}'

SQLALCHEMY_TRACK_MODIFICATIONS = "False"
