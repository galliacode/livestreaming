# Prometheus exporter

The goal of this version is to offer a few basic metrics for
initial testing. The set of supported metrics can be extended.

## Metrics

| metric | value |
|--------|-------|
| `livechart_peers`| |
| `livechart_rooms`| |
| `mediasoup_consumer_byte_count_bytes`| [`byteCount`](https://mediasoup.org/documentation/v3/mediasoup/rtc-statistics/#Consumer-Statistics) |
| `mediasoup_consumer_score`| [`score`](https://mediasoup.org/documentation/v3/mediasoup/rtc-statistics/#Consumer-Statistics) |
| `mediasoup_producer_byte_count_bytes`| [`byteCount`](https://mediasoup.org/documentation/v3/mediasoup/rtc-statistics/#Producer-Statistics) |
| `mediasoup_producer_score`| [`score`](https://mediasoup.org/documentation/v3/mediasoup/rtc-statistics/#Producer-Statistics) |

## Architecture

```
+-----------+      +---------------------------------------------+
| workers   |      | server                    observer API      |
|           | sock |                    +------o------+----o-----+
|           +------+                    | int. server | exporter |
|           |      |                    |             |          |
| mediasoup |      | express  socket.io |     net     | express  |
+-----+-----+      +----+---------+-----+-----+-------+-----+----+
      ^ min-max         ^ 443     ^ 443       ^ sock        ^ 8889
      | RTP             | HTTPS   | ws        |             | HTTP
      |                 |         |           |             |
      |               +-+---------+-+  +------+------+  +---+--------+
      +---------------+     app     |  | int. client |  | Prometheus |
                      +-------------+  +-------------+  +------------+
```
