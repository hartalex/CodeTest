# Code Test BackEnd API

## Running the BackEnd API

```bash
yarn
yarn run start
```

Browse to <http://localhost:8080>

## View API Online

* [https://api.hartcode.com/models?q=test](https://api.hartcode.com/models?q=test)

## Get models

/models?q={search string}&offset={paging offset}&limit={max-count}&sort={(+/-)fieldName}&{fieldName}={filter}

### Searching Data

/models?q=test

### Sorting Data

/models?q=test&sort=+name

### Limiting Data

/models?q=test&limit=10

### Filtering data

/api/models?q=test&name=Aphrodite

## Data Format

```
{
  "result_total": 50,  // total number of data items found with q= search
  "result_offset":0,   // current index of data items returned. set with 'offset=''
  "result_count":1,    // number of data items returned. set with 'limit=''
  "data":[{Model Data from Sketchfab}]
}
```
