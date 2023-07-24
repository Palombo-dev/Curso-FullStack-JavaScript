import cv2
import time
import numpy as np

cap = cv2.VideoCapture(0)
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
check_time = time.time()
def check_presence(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    if len(faces) > 0:
        return True
    else:
        return False

while True:
    ret, frame = cap.read()
    
    if ret:
        # verificar a presença a cada 5 segundos
        if time.time() - check_time > 5:
            presence = check_presence(frame)
            if not presence:
                # disparar alerta
                print("Ninguém presente!")
            
            check_time = time.time()
            
        cv2.imshow('Webcam', frame)
        
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
        
cap.release()
cv2.destroyAllWindows()