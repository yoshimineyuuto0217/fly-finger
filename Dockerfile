FROM php:8.2-fpm

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libzip-dev \
    libonig-dev \
    libicu-dev \
    && docker-php-ext-install zip pdo_mysql

# Composerインストール
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

# Node.jsとnpmをインストール
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Laravelプロジェクトのファイルを全部コピーする
COPY . .

# Composerとnpmで依存関係をインストール
RUN rm -rf node_modules package-lock.json && \
    composer install && \
    npm install

EXPOSE 8000 5177

CMD ["sh","-c","php artisan serve --host=0.0.0.0 --port=8000 & npm run dev"]
