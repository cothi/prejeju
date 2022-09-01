import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = [
'https://spreadsheets.google.com/feeds',
'https://www.googleapis.com/auth/drive',
]

json_file_name = {
  "type": "service_account",
  "project_id": "prejeju-361210",
  "private_key_id": "b645352403945ed1f18668e28164fcf9b16c73bd",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2V4r0R86zBISU\nCRwogqJh2VQPBajJ3cN4lfEDom6/zZ62thrvglCjJvud9Bv7mwFP6p+/liEgL2yd\ne7lLp+tQU2eA42vnZGN4czzANLQ66C9f7jr+7zzXuVwdPiPqcYkBINN2NwgdbFAt\nl82daYtGGqhr02jBDsyQhTGl0dcw2MEbUlCtKMUItfrGwL8WVWgW5jqzlTNsoeS8\n/wIXKwca7KyFCk8668Xupk5RnImT+pJL43s0ZIKOYNBmoguvfzY7ZTk/F+Bemopx\naqauVvcwIWuM9KIwEaYvAWy+5OjQgkPC1YYuqcM/lwaADiz1mMXfcsE9gpdFv3Yq\nWXMlkRBbAgMBAAECggEACTaV92ij1Nj9ZFSr6I9MaldGoqLgxKDNt9hG3xRXaWrK\n6MtKXYaFhO9H6jlwXh+WsS89g4ev0TMapAzUiWV8EIkpgxJHdhMIRG8slAwI40UV\nR7dlobkvpzkr1b2f2o1PPkOM8iP7s/wW3Qbjkiv7Qb9Z4GdEaFgGfAyCCRfeOkIg\nXL5zrMVciRqm1fnE/ltWgrrbbtZ74lxiNnHNsj+9pqbqQ2/9SEbBBXH4/+D77vgN\nXM4bbkU2g0L6v6K5p3oZ8BJ05j2hnuHIa1bzbFII6ETEBRIumQJSdKF/4kJ3UlvP\nDu2zZgdFZLZnCh/+ce486ZZYJ3P0W8zpeGh7G+BOqQKBgQDtYzP6s1uxqbVbq6H3\nzrZ/bNB0WVBnoHR5Na570CYayyAG6OnJUinrzzhmViJ8Em1EBg9yatx0+W6N5yV2\nOYt7hA0uIW9Zs5GLz3ncziA+OJoA11SssFr4+7PfiyIbB01D0UZ5vN+MUzrELmWf\nzt6Y9qihn1nmoNPXWmaTp8Dk1wKBgQDEo3naN+CMmf1s8iljN5OlwZbiGV3lgckn\nF73MFUakqZ6H9Tqc/Q5Bo6Ct15tXRxOoeNywrCqOppDJxYXKxczHtMMiNUoI3NZN\nofFhBjbYFVlZd3/a58b707TbqIA+FSkT1Qzton0utuDotVZvt8xe3UAtrDiBqNOm\nMZfnDjl8HQKBgGKg7e7CaF13ckdlFwVbmE13C2Db3uE/NEVL/XOptrs5G9RjHwcr\nIQm9beRu8yLzkPxLPE3AgloDbGB+4fytyfsGkWdSMu5lAhrBmBMafSD86VdiH+cj\n2phKE6DUMNZkAUElCQ/5XjPyPJ9X25c7HxcUnFmSWIrO1VVLVQUSFL2/AoGAcPKl\nr16hMKHTG50NgNwPhwpnrH99m7Ks5DOS5YLjDPoRAW8ut7XzVmiyhqhtpfhBpmel\n/CUoXL/4Mq2uaAat1ZhS7XdGi0iuH/GBQIXdQskghW9KlWbEuSmlnPZwkzh8W9Po\nlSbcWNTa41Al0g306hiUIKfn3TIoQDIEWsek5VECgYEA7OX78fRIJybdYCmA55aR\n78CSTCsBBb2oWMkHDZL3kTJBoy74M3hzYjGsBhZYxfmGHjV1Y4UDkvaQLEmzXEA+\n/w2O+AQbGY6mSymdu195CWMmGKJP+OHAcGAVjpWPM5VGOnx1+yAm8jMEGvcweSm5\nME+E7xML5Fzwtot0KAnhMtg=\n-----END PRIVATE KEY-----\n",
  "client_email": "prejeju-778@prejeju-361210.iam.gserviceaccount.com",
  "client_id": "117609623828832122415",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/prejeju-778%40prejeju-361210.iam.gserviceaccount.com"
}

credentials = ServiceAccountCredentials.from_json_keyfile_name(json_file_name, scope)
gc = gspread.authorize(credentials)
spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1jW_nZkrvwVwqFqJtrRJPZPl4D2iuAtBnBgu-bkpjNsc/edit#gid=0'
doc = gc.open_by_url(spreadsheet_url)
worksheet = doc.worksheet('카페')
