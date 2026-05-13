# 30-03-26
- every api req does not need a useeffect hook
- cors --> cross origin resource sharing

# 31-03-26
- delete and get by particular firnd do not have body, the data is sent in 
- client side application and server side application can interact with eachother over http protocol by making http req and reciveing http res
- to make the http req frm client side application, one can use weither fetch or axios module
- the following are the http req types:
  - GET -> to read all resources
  - POST -> to create a new resource
  - PUT -> to update entire resource
  - DELETE -> to delete a resource
  - PATCH -> to update a resource partially
- the POST,PUT and PATCH req types can have body property which can hold JSON data whereas GET and DELETE req do not have body property and can send data through url
- STATE MANAGEMENT
  - sharing state+keeping state sync across app 
  - prop drilling issue
    -- like creating pipleine mechanism(smaller applications) - context,context provider and context consumer is used(Context API -> small apps)
    -- redux/Zustand -> large apps
- CONTEXT API
  - create context obj (pipeline)
  - add state to context obj (add water to pipeline)
  - set this context provider to a parent
  - consume context from components

# 01-04-26
- Issues with context:
  - context with use state hook is a best and simple state management mechanism for small applications, but it creates unnecessary rerendering issues when multiple state is part of a context
  - to overcome this rerendering issue, create multiple contexts and make sure each context has a single state
  - when the application size is huge, then maintanance of multiple context will become an issue. for such large applications advanced state managemnet tools like redux or zustand can be used.

- ADVANCED STATE MANAGEMENT WITH ZUSTAND ******
  - install zustand
    npm install zustand
  - create a global store and functions that keep state
  