# n8n Expressions Cheat Sheet

## Access JSON data
```n8n
{{ $json["email"] }}
```

## Reference another node's output
```n8n
{{ $node["Get User"].json["name"] }}
```

## Conditional example
```n8n
{{ $json["score"] > 80 ? "pass" : "fail" }}
```

## Date manipulation
```n8n
{{ new Date().toISOString() }}
```