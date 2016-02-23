# "410 Gone" App
I created this app with an intention to push it to [Dokku](http://dokku.viewdocs.io/dokku/)-powered hosts with a name like "00-default".

## Usage
It will be used as the default nginx vhost as long as:

* it lists first in ``ls /home/dokku/*/nginx.conf | head``;
* it is the only app with ``NO_VHOST: 1`` config var.

## License
[MIT](http://abulava.mit-license.org)
