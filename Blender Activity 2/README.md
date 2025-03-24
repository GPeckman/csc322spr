### Checkpoints 1 and 2

The x-rotation matrix is:
```
Rx = [
    1    0         0
    0    0.7071   -0.7071
    0    0.7071    0.7071
]
```

The y-rotation matrix is:
```
Ry = [
    0.7071      0     0.7071
    0           1     0
   -0.7071      0     0.7071
]
```

`Pxy` (the point after rotating along the x-axis then the y-axis) is equal to `Ry * Rx * P = (1.7071, 0, 0.2929)`.

`Pyx` (the point after rotating along the y-axis then the x-axis) is equal to `Rx * Ry * P = (1.4142, 0.7071, 0.7071)`.

### Checkpoints 3 and 4
`t1(world | cube) = t(world | plane) + t(local | cube)`

`t1(world | cube) = (1, 1, 2) + (2, -1, 1) = (3, 0, 3)`

`t2(world | cube) = t(world | plane) + Rx * t(local | cube)`

`t2(world | cube) = (1, 1, 2) + (2, -1.4142, 0) = (3, -0.4142, 2)`

### Checkpoint 6
Increasing the focal length while moving the camera away a proportional amount makes features near the center of the image smaller and ones away from the center appear larger. Bigger changes in focal length make this effect stronger.