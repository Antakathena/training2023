From https://stackoverflow.com/questions/68592669/how-to-set-value-for-node-tls-reject-unauthorized-0-in-mac

export NODE_TLS_REJECT_UNAUTHORIZED=1 - Mac/Linux
set NODE_TLS_REJECT_UNAUTHORIZED=1 - Windows

cat /proc/sys/fs/inotify/max_user_watches

Notes de grooming:

How can -1 mean any number of line in the variable numberOfRequiredLines = -1 ?

In programming, -1 is often used as a flag value or a sentinel value. When numberOfRequiredLines is set to -1, it could mean that the number of required lines is not limited, or it could be any number of lines. This is a common practice in many programming languages and frameworks. However, the exact meaning can vary depending on the context of the code. It’s always a good idea to check the documentation or comments in the code to understand the specific usage.

In computer programming, a sentinel value (also referred to as a flag value, trip value, rogue value, signal value, or dummy data) is a special value in the context of an algorithm which uses its presence as a condition of termination1. This is typically used in a loop or recursive algorithm.

The sentinel value is a form of in-band data that makes it possible to detect the end of the data when no out-of-band data (such as an explicit size indication) is provided. The value should be selected in such a way that it is guaranteed to be distinct from all legal data values since otherwise, the presence of such values would prematurely signal the end of the data1.

Some examples of common sentinel values and their uses are:

Null character for indicating the end of a null-terminated string.
Null pointer for indicating the end of a linked list or a tree.
A set most significant bit in a stream of equally spaced data values, for example, a set 8th bit in a stream of 7-bit ASCII characters stored in 8-bit bytes indicating a special property (like inverse video, boldface or italics) or the end of the stream.
A negative integer for indicating the end of a sequence of non-negative integers1.
In your case, -1 can be set as the sentinel value in a loop algorithm that computes non-negative integers. This is because the computation will never encounter -1 as a legitimate processing output. So, -1 can be used to terminate a loop.

Simply put, it is a value that your program would not encounter unless you really want to tell the specific thing it's programmed to do. So somewhere, you say to your program : "Hey, if you meet that value it means *blablabla* (whatever it's supposed to do, like stop the loop for exemple or take in any number of lines)".

QUIZZZZZZZZZZZZZZZZ ANSWERS

How can Generative AI improve your life at work? Select all the benefits of using Gen AI:
All answers

