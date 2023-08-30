import  java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        //ваш код
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int sum = 0;
        while (N > 0) {
        sum =sum + N;
        N++;}
        System.out.println(sum);
    }

}