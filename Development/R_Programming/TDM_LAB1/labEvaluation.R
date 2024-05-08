data()
View(rock)


names(rock)
colnames(rock)

head(rock)[1:3]


str(rock) 



data1 <- rock 
miss_count= sum(is.na(data1)) 
miss_count

duplicates_df <- duplicated(data1) 
duplicates_df

duplicate_rows <- data1[duplicates_df, ] 
print(duplicate_rows)

no_duplicate_rows <- data1[!duplicates_df, ]
#View(no_duplicate_rows)

class(data1$shape)

table(data1$shape)

class(no_duplicate_rows$shape)

table(no_duplicate_rows$shape)

# Scatter plot 
plot(rock$area, rock$area, col = rock$shape, pch = 16, main = "Scatter Plot of area vs. shape", xlab = "  area ", ylab = " wool")
legend("topright", legend = levels(rock$shape), col = 1:3, pch = 16, title = "shape")# Line plot of Petal Length across shape
plot(rock$area, type = "l", col='green', main = "Line Plot of  area across shape", xlab = "Index", ylab = "area")

library(ggplot2)
ggplot(rock, aes(x = shape, y = area)) +
  geom_point() +
  labs(title = "Line Plot of area across shape", x = "shape", y = "area")


library(ggplot2)
ggplot(rock, aes(x = shape, y = area, group = shape, color = shape)) +
  geom_line(size = 1.5) +  
  geom_point(size = 3, shape = 21, fill = "white") +  
  labs(title = "Line Plot of area across shape", x = "shape", y = "area") +
  scale_color_manual(values = c("L" = "#1f77b4", "M" = "#ff7f0e", "H" = "#2ca02c")) + 
  theme_minimal() +
  theme(plot.title = element_text(size = 20, face = "bold"), 
        axis.title = element_text(size = 14), 
        legend.position = "none")


barplot(rock$area,
        beside = TRUE,
        col = rainbow(3),
        main = "Bar Chart of area by shape",
        xlab = "Observations",
        ylab = "area")
legend("topright",
       legend = levels(rock$shape),
       fill = rainbow(3))


# Bar chart of average area for each shape
barplot(tapply(rock$area, rock$shape, mean), col = rainbow(3), main = "Bar Chart of Average area by shape", xlab = "shape", ylab = "Average area")

# Pie chart of the proportion of each shape
pie(table(rock$shape), col = rainbow(3), main = "Pie Chart of shape Proportion", labels = levels(rock$shape))

# Box plot of area by shape
boxplot(area ~ shape, data =rock, col = rainbow(3), main = "Box Plot of area by shape", xlab = "shape", ylab = "area")

# Histogram of shape
hist(rock$shape, col = "skyblue", main = "Histogram of shape", xlab = "shape", ylab = "Frequency")

# Generate two random samples
group1 <- rnorm(100, mean = 10, sd = 2)
group2 <- rnorm(100, mean = 12, sd = 2)

# Perform independent samples t-test
t.test(group1, group2)


library(ggplot2)

rate<-c(6.9, 6.7, 6.6, 6.5, 7.3, 6.2, 7.0, 6.9, 6.7, 6.6, 6.5, 6.4)
month <- c("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
           "Sept", "Oct", "Nov", "Dec")

monthly_rate<-data.frame(Month=month,Unemployment=rate)
print(monthly_rate)

#Inside the square bracket mention the column name and access March.
# After accessing March obtain corresponding value

unemp_March<-monthly_rate$Unemployment[monthly_rate$Month=="Apr"]
print(unemp_March)

name<-monthly_rate$Month[monthly_rate$Unemployment<6.5]
print(name)

# Scatter plot
ggplot(monthly_rate, aes(x = Month, y = Unemployment)) +
  geom_point() +
  labs(x = "Month", y = "Rate") +
  ggtitle("Rate vs. Month")

ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy))

ggplot(data = mpg)

ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy, color = class))

ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy, size = class))

ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy, alpha = class))

# Right
ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy, shape = class))