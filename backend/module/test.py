import cv2

cap = cv2.VideoCapture("video2.mp4")

# vehicle detector
vehicle_detector = cv2.createBackgroundSubtractorMOG2(history=200, varThreshold=40)


while True:
    ret, frame = cap.read()

    height, width, _ = frame.shape

    # region
    # roi = frame[40: 720, 100: 800]

    # detecting object
    mask = vehicle_detector.apply(frame)
    _, mask = cv2.threshold(mask, 254, 255, cv2.THRESH_BINARY)

    contours, _ = cv2.findContours(
        mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > 180:
            # cv2.drawContours(frame, [cnt], -1, (0, 255, 0), 1)
            x, y, w, h = cv2.boundingRect(cnt)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # cv2.imshow("roi", roi)
    cv2.imshow("Frame", frame)
    # cv2.imshow("mask", mask)

    key = cv2.waitKey(30)

    if key == 97:
        break

cap.release()
cv2.destroyAllWindows()
