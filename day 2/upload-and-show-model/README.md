# Krok 0 - przygotowanie postmana
1. Utworzenie kolekcji
2. Utworzenie środowiska dla zmiennych

# Krok 1 - implementacja logowania

Dokumentacja: https://forge.autodesk.com/en/docs/oauth/v2/reference/http/authenticate-POST/

Dostępne scopes:
https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/


Przydatny kod do wklejenia w POSTMAN do przechwytywania **access_token**
```javascript
var key = "access_token";
var value = pm.response.json().access_token;
pm.environment.set(key, value);
```

# Krok 2 - Pobieranie listy "folderów"

Dokumentacja: https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-GET/

**Należy zwrócić uwagę na regiony!!!**


# Krok 3 - Utworzenie nowego "folderu"

Dokumentacja: https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-POST/

# Krok 4 - Pobranie listy obiektów w "folderze"

Dokumentacja: https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-GET/

# Krok 5 - Pobranie linków do uploadu plików

Dokumentacja: https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-GET/


# Krok 6 - upload plików

PUT'em wysłać na powyższe linki odpowiednie części właściwego pliku


# Krok 7 - zatwierdzić zakończenie wysyłania danych

Dokumentacja: https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/


# Krok 8 - Rozpocząć przetwarzanie modelu

Dokumentacja: https://forge.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/

# Krok 9 - Sprawdzić status przetwarzania modelu

Dokumentacja: https://forge.autodesk.com/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/

# Krok 10 - Wyświetlić widoki
Dokumentacja: https://forge.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/