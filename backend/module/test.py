import cv2
# from tracker import *

cap = cv2.VideoCapture("video2.mp4")

# vehicle detector
vehicle_detector = cv2.createBackgroundSubtractorMOG2()


while True:
    ret, frame = cap.read()

    # diamention = frame.shape

    # region
    roi = frame[140: 720, 300: 800]

    # detecting object
    mask = vehicle_detector.apply(frame)
    _, mask = cv2.threshold(mask, 254, 255, cv2.THRESH_BINARY)

    contours, _ = cv2.findContours(
        mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > 200:
            cv2.drawContours(roi, [cnt], -1, (0, 255, 0), 1)
            x, y, w, h = cv2.boundingRect(cnt)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # cv2.imshow("roi", roi)
    cv2.imshow("Frame", frame)
    cv2.imshow("mask", mask)

    key = cv2.waitKey(30)

    if key == 97:
        break

cap.release()
cv2.destroyAllWindows()
