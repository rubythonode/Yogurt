var store=STORE("testStore"),boxStore;console.log(store.get("msg")),store.save({key:"msg",value:"This is test message!"}),console.log(store.get("msg")),store.remove("msg"),console.log(store.get("msg")),boxStore=TestBox.STORE("testStore"),console.log(boxStore.get("msg")),boxStore.save({key:"msg",value:"This is test message!"}),console.log(boxStore.get("msg")),boxStore.remove("msg"),console.log(boxStore.get("msg"));