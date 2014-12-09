#! /usr/bin/python2.7
# -*- coding: utf-8 -*-

from glob import glob
import json
import os

from flask import Markup
import markdown

from settings import APP_STATIC, APP_TEMPLATES


get_data_path = lambda f: os.path.join(APP_STATIC, 'data', f)

def get_notice(id):
    notice_file = glob(os.path.join(APP_TEMPLATES, 'notices', '%s-*.md' % id))
    if len(notice_file)==1:
        with open(notice_file[0], 'r') as f:
            return {'id': id,
                    'title': notice_file[0].split('-', 1)[-1].rsplit('.', 1)[0],
                    'content': Markup(markdown.markdown(f.read().decode('utf-8')))}
    else:
        raise Exception("Are all file IDs unique?")

def read_csv_data(filename, sep=','):
    with open(get_data_path(filename), 'r') as f:
        return [row.decode('utf-8').split(sep)\
            for row in f.read().splitlines()]

def read_json_data(filename):
    with open(get_data_path(filename), 'r') as f:
        return json.load(f, encoding='utf-8')

def read_txt_data(filename):
    with open(get_data_path(filename), 'r') as f:
        return f.read().decode('utf-8').splitlines()
