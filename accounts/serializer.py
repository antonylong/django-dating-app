from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        # remove the password and password confirmation from the request body
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        # check if the passwords match
        if password != password_confirmation:
            raise ValidationError({'password_confirmation': 'Passwords do not match'})

        # check if the password is valid
        try:
            password_validation.validate_password(password=password)
        except ValidationError as err:
            raise ValidationError({'password': err.messages})

        # hash the password, and add back to the dictionary
        data['password'] = make_password(password)

        return data

    class Meta:
        model = User 
        fields = ('id', 'email', 'username', 'password_confirmation', 'password')
