# Output into geoJSON format
# {
#   "type": "Feature",
#   "geometry": {
#     "type": "Point",
#     "coordinates": [125.6, 10.1]
#   },
#   "properties": {
#     "name": "Dinagat Islands"
#   }
# }

import json
import urllib2
from xml.etree import ElementTree

xmlstring = urllib2.urlopen("https://www.atxfloods.com/dashboard/phpsqlajax_genxml.php").read()
root = ElementTree.fromstring(xmlstring)

resultObject = {'type':'FeatureCollection',
                'features': []}
for child in root:
  resultObject['features'].append(
    {'type':'Feature',
    'geometry': {
      'type':'Point',
      'coordinates': [float(child.attrib["lng"]), float(child.attrib["lat"])]},
    'properties': {
      'name':child.attrib["name"],
      'status':child.attrib["type"]},
    'id':child.attrib["id"]})

print json.dumps(resultObject)