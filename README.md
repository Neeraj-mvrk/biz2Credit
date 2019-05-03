# biz2Credit
Program that will read the full list of customers and output the names and user ids of matching customers (within 100km), sorted by User ID (ascending).

Knn-sphere package is used to swiftly look up which of those points are near a given latitude, longitude pair.

To Run this project 

1.Clone this repository in your system.

2.Run npm install(it will install all the packages related to this module) and that's it you get all the customer within 100km range of Dublin.

3.This module read a customer records in a text file (customers.txt) and convert that data to JSON format for further process.

4.Knn-sphere library is used to get the (lat,long) points which are within the range of 100km of Dublin

5.EJS is used to render the customer data in to HTML.
