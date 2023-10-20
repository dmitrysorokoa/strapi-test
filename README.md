run app:
create .env file and copy variables from .env.example
docker compose -f docker-compose.yml up

in admin panel settings import permisions from config files (CONFIG SYNC)
create token in admin panel settings
copy created token to .env file (NEXT_PUBLIC_STRAPI_API_TOKEN)
restart app

