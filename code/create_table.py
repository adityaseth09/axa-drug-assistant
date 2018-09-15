import sqlite3

connection = sqlite3.connect('data.db')

cursor =  connection.cursor()

create_table = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, name TEXT, birthdate TEXT, type_of_user TEXT)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY, name TEXT, birthdate TEXT)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS allergy (id INTEGER PRIMARY KEY, name text)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS conditions (id INTEGER PRIMARY KEY, name text)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS drugs (id INTEGER PRIMARY KEY, name text, emergency INTEGER)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS patient_allergies (patient_id, allergy_id)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS patient_conditions (patient_id, condition_id)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS patient_drugs (patient_id, drug_id)"
cursor.execute(create_table)

connection.commit()
connection.close()
