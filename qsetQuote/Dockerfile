FROM acrdevne.azurecr.io/avantia/react-website:latest AS BUILD
WORKDIR /app

RUN npm install
COPY . ./
RUN npm run build
RUN rm -r public/ && rm -r src/
RUN find ./ -name *.sh -print0 | xargs -0 chmod 766
EXPOSE 3001
ENTRYPOINT ./container-setup.sh && npm run run:server
# CMD ["sleep", "9000s"]
