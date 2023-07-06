x=read.csv("C:/Users/PRANJAL SINGH/Downloads/digit-recognizer/train.csv")
dim(x)
head(x)[1:5]
tail(x)[1:5]
x[5,]
x[2,1:9]
x[,c(3,4)]
s1=matrix(as.numeric(x[2,-1]),nrow = 28, byrow = TRUE)
image(s1,col=grey.colors(255))
install.packages("OpenImageR")
library(OpenImageR)
s2=rotateFixed(s1,90)
