FROM nginx

COPY default.conf /etc/nginx/conf.d/default.conf

RUN bash -c 'echo $(head -n -1 /etc/nginx/mime.types)" application/wasm wasm; }" > /etc/nginx/mime.types'
