FROM vuejs/ci
# A imagem do vue é baseada na imagem do node
# A imagem node roda com comando UNIX.

# Garantindo UNIX
RUN apt-get update
RUN apt-get autoremove

RUN mkdir /home/app
WORKDIR /home/app

COPY package*.json ./
RUN npm install -g @quasar/cli
RUN npm install

COPY . .

EXPOSE 80
EXPOSE 8080

CMD ["quasar", "dev", "-m", "pwa"]