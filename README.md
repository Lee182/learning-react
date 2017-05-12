# personal-details-form

## folder structure
```
/
  learnyoureact
  learnyoureact-invuejs
  project
```
project encapsulates main project.

`learnyoureact`, is a folder with my solution to the shell challenge, also contains some notes about react

`learnyoureact-invuejs` is same solution written in basic vuejs. in my opinion its more elegant, though lacks the composition with components (i probably need to learn this in vue).

## project
plan is to parse form.cson to object.
then from that object start building forms in react.
and responding to the form being sent on the server.

both depends on verification functions, which throw locatable errors in an array.
then will need to visuals of these errors in reactjs things like
```
field required
invalid date format at ${label}
invalid individual array item
```

## context
after first thing is build will need to work on context, with navigation placeholders to other parts of the app, and maybe a completed form search/viewing mode then editing.
