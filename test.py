#!/usr/bin/python
import os, sys
myfile = os.sys.argv[1:][0]

cont = []

with open(myfile,'r') as f:
    cont = f.readlines()

with open(myfile,'w') as f:
    for l in cont:
        l = l[:-1]
        t = 'document.write(\''+l+'\');\n'
        f.write(t)
