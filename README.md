# Medicamentor ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Medicamentor is a Python-Flask Web application acting as a Personal Medical Assistant .

## Installation

### Requirements
* Linux
* Python 3.6 and up
* npm/yarn
* sqlite3(usually ships with python)

1) Option: you install all in your machine


Create and initialize a virtual environment using python3:

`virtualenv --python=<path to python3> <venv>
source <venv>/bin/activate`

`$ cd $PROJECT_LOCATION/code/`

`$ pip install -r requirements.txt`

To Create DB on QA/Staging/production

`$ python create_table.py`

## Usage

```
For a live Demo Go To 
```

## [working-website](http://129.213.156.32:5055/)
```
Sample accounts for Usernames/password -->

Doctor  para/para
Patient bob/asdf
```


## Development
```
$ virtualenv venv
$ . foobar/bin/activate
$ pip install -e .
```

## Integration Testing using Postman
```angular2html
https://www.getpostman.com/collections/4915cf10a686e4a7d2bc
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
