# Quick Union
1. 使用樹狀的結構，樹的節點由小孩指向父親。
每個節點只有一個指針，指向另外一個元素。
指針可以用 array 來儲存，也就是 parent。

2. 初始化的時候，每個節點都可以看做一棵樹，節點都沒有跟其他節點合併，每個節點都指向自己。

```javascript=
//            0   1   2   3   4   5   6   7   8   9
//            -------------------------------------
//   parent   0   1   2   3   4   5   6   7   8   9

```

3.
+ connected: 根節點的值是不是一樣
+ find: 找出物件根節點
+ union: 將兩個物件的根節點統一

把左邊點的 root 改成 右邊點的 root，要判斷是否為連通(union)，就檢查兩個點的 root，如果一樣則代表兩個點為連通。

例如節點 3 指向節點 2，那麼節點 2 就是這棵樹的根節點，雖然節點 2 是一個根節點，但是它也有一個指針，這個指針指向的是自己，
在這種情況下如果節點 1 要和節點 3 進行一個合併，
這個合併操作就是就是讓節點1 的指針指向節點3 指向的這棵樹的根節點，
也就是讓節點 1 去指向節點 2。


```javascript=
//     (5)             (2)
//    /   \            |  \
//   /     \           |   \
// (6)     (7)        (3)  (1)

```


![](https://i.imgur.com/AzkQ6yj.png)


4. 如果進行 union(4, 3)操作，
那麼直接讓節點4 的的指針去指向節點 3 就好了，這樣的一個操作在陣列中表示出來就是 parent[4] = 3，
```javascript=
//            0   1   2   3   4   5   6   7   8   9
//            -------------------------------------
//   parent   0   1   2   3   4   5   6   7   8   9
//
//                        Quick Union
//   (0)   (1)   (2)   (3)   (4)   (5)   (6)   (7)   (8)   (9)
//
//   如下操作
//   union(4, 3); // 4->3
//   0   1   2   3   4   5   6   7   8   9
//   -------------------------------------
//   0   1   2   3   3   5   6   7   8   9

```

6. QuickUnion 的 union 操作的時間複雜度是O(h)，h 是當前 union 的這兩個元素它所在的樹相應的深度大小


## Weighted Quick Union

1. 這樣一來可以透過任意的節點非常容易的查詢到這棵樹相應的根節點是誰，那麼也就是就知道了對於每一個節點來說它所屬的集合編號是誰。
2. 當你union 的次數變得很大的時候，實際上就是將更多的元素組合在了一個集合中，得到那棵樹有可能變得很長，深度就會變高
3. 有可能因為樹的增長，導致整個物件變得很長，要找到根節點可能要遍歷整棵樹才能找到某個根節點
##### 方法
1. 追蹤每一棵樹的大小，
2. 將小棵樹的根節點指向大棵樹的子節點，使樹結構的深度最大爲lg2(N)
![](https://i.imgur.com/aSVISoj.png)

![](https://i.imgur.com/H2s1R4p.png)



## Quick Union with Path Compression

每次訪問一個點時，都將id[]裡的儲存值指向當前樹的根節點，大大減小樹的深度。

![](https://i.imgur.com/qm6IpNt.png)


## Weighted Quick Union with Path Compression

綜合上述兩種改進方法，可以形成最優解法。以下是最壞情況下算法的數組訪問次數。這裡的N，M表示對一個包含N個點的點集進行M次聯合操作。

![](https://i.imgur.com/EhhrbAr.png)
