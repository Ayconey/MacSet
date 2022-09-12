FROM python:3.9-alphine3.13
LABEL maintainer="MacSet.com"
ENV PYTHONUNBUFFERED 1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install --upgrade pip && \
    apk add --update no-cache postgresql-client && \
    apk add --update no-cache --virtual .tmp-deps \
      build-base postgresql-dev musl-dev && \
    pip install -r requirements.txt && \
    apk del .tmp-deps && \
    adduser --disabled-password --no-create-home default \
COPY . /code/
EXPOSE 8000
USER default