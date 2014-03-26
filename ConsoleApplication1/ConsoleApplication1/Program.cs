using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication1
{
    class Program
    {
        public static void Main(string[] args)
        {

            int[] array = new int[150];
            int i = 1;
            for (int j = 1; j < array.Length; j++)
            {
                if (j == 2 * i)
                {
                    Console.WriteLine(" ");
                    Console.Write(j + " ");
                    i = j;
                }
                else
                {
                    Console.Write(j + " ");
                }
            }
            Console.WriteLine("pause");
        }
    }
}
