powershell Compress-Archive dist internship.zip
scp -r internship.zip root@194.87.69.217:/var/www/
ssh root@194.87.69.217 'rm -rf /var/www/internship; unzip /var/www/internship.zip -d /var/www/; mv /var/www/dist /var/www/internship; rm /var/www/internship.zip'
rm internship.zip
