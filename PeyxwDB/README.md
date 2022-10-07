# PeyxwDB




# How To Use
```npm i peyxwdb```
```const Database = require("peyxwdb")```<br>

For use special file, you can use like this: ```const db = new Database("file")```<br>

# For Add or Set A Value

```db.set("value","data")``

```==> "input": "data"```

```db.add("value",2)```

``` ==> "value": 2```

# For Fetch or Get A Value

```db.get("value")```

```==> "data"```

```db.fetch("value")```

```==> "data"```
# For Push A Data into a Value
```db.push("array","data")```

```==> Pushed data into array```

# For Delete A Value
```==>db.delete("value")``

```==>==> Delete all data in "value"```

# For Batch Processing
```db.backup("filename")```

```==> Copy your datas into filename.json```

```db.All()```
```==> Shows all data```

```db.deleteAll()```

```==> Delete All Datas```

# For Math Operations
```db.math("a","+","b",true)```

```==> A and B may be a data in database |```

**Thanks For Using peyxw.db**

