rm -r /data/www/*
cp -R ~/itc2024-frontend/build/* /data/www
cp -R ~/itc2024-frontend/build/static /data/www
nginx -s reload