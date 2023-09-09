import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print(" 3434 #Введите первое число: ");
        int num1 = sc.nextInt();

        System.out.print("Введите второе число: ");
        int num2 = sc.nextInt();

        int sum = num1 + num2;

        System.out.println("Сумма чисел: " + sum);
    }
}