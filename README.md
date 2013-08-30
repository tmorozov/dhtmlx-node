dhtmlx-node
===========

How to use scalable JS architecture core + dhtmlx.

Backend - node+express

Front end architecture
----------------------
Thanks to DHTMLX - almost no custom HTML & CSS.
[Core](https://github.com/tmorozov/core) was used for scalability and organization of application structure.
jQuery used for DOM ready & AJAX (could easily be replased with custom code or other library).

File list:

1. sandbox_extension.js - AJAX requests
2. app.js - creation of Layout and modules configuration
3. modules

* serializer - saves/loads data by utilizing API provided by backend
* contacts - grid view
* details - form for update data
* menu - topmost menu placeholder
* toolbar - Add/Del buttons
* popup_new_contact - form for creating new instance of data

Communication between modules is doen on Pub/Sub basis

Events list:

* contact:create
* contact:created
* contact:update
* contact:updated
* contact:delete
* contact:deleted
* contact:selected
* contact:new

Backend
-------
Backend is based on Node.js & Express.

From root application is loaded.

`/users` - provide REST-like access to users list. It supports CRUD of User resource
