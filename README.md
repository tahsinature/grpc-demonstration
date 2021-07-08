### the idea

- structure

  - create two services
  - call http call to service A
  - service A will call service B with gRPC
  - service B will send a response by processing the payload from service A
  - then service A will get the response from service B
  - then client will get the response from service A
  - > in this repository: service A (Master) service B (Note)

- benchmark
  - call master service with HTTP call x amount of time
  - call master service with gRPC call x amount of time
  - take a note of those times & compare them

> here is the result on my machine

| Number of Calls | HTTP     | gRPC      |
| --------------- | -------- | --------- |
| 10              | 46.834ms | 8.897ms   |
| 100             | 248.67ms | 38.919ms  |
| 1000            | 1.746s   | 228.801ms |
| 10000           | 17.038s  | 2.913s    |
| 50000           | 187.042s | 15.179s   |

> of course the result may vary depending on your machine. my spec:
>
> ```
>   System:
>     OS: macOS 11.4
>     CPU: (12 Core) x64 Intel(R) Core(TM) i7-8750H -> CPU @ 4.1GHz
>     Memory: 656.07 MB / 16.00 GB
>     Shell: 5.8 - /bin/zsh
> ```

### To run a service

```bash
npm run master
or,
npm run note
```

### To run a specific file in

```bash
npx ts-node <file path>
# npx ts-node others/playground.ts
```

### To run benchmark

```bash
npm run benchmark
```
