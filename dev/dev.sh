#!/bin/bash
echo "corriendo en el puerto 11405"
docker run --rm -ti --name insercion-ui -v $(pwd)/src:/src -p 11405:4200 desarrollo-ui
