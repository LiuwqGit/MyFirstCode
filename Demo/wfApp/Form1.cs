using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace wfApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnOK_Click(object sender, EventArgs e)
        {
            //一些信息：
            //100（1+0.1）*1000   100w
            //初始数量：
            int initializeNum;//初始数量
            double birthRate;//出生率
            int everySheepEat;//每头羊每天吃草量
            int productionGrass;//生产草量。
            int sumSheep;//羊总数。
            double coefficent;//系数
            int sumNeedGrass;//总需草量

            //initializeNum = 100;
            //birthRate = 0.1;
            //everySheepEat = 100;
            //productionGrass = 26101;
            initializeNum = int.Parse(this.txtInitializeNum.Text.Trim());
            birthRate = double.Parse(this.txtBirthRate.Text.Trim());
            everySheepEat = int.Parse(this.txtEverySheepEat.Text.Trim());
            productionGrass = int.Parse(this.txtProductionGrass.Text.Trim());
            //int sheepStyle = this.rdbOld.Checked.ToString();

            sumNeedGrass = initializeNum * everySheepEat;
            if (this.rdbOld.Checked)
            {
                coefficent = 1 + birthRate;
                int i = 0;
                do
                {
                    sumSheep = initializeNum;
                    for (int j = 1; j < 11; j++)
                    {
                        //n年之后，羊总数：
                        sumSheep = (int)(sumSheep * coefficent + 0.5);//四舍五入取整
                        //总需要的草量。
                        sumNeedGrass = sumSheep * everySheepEat;
                        this.lblInfo.Text += sumNeedGrass.ToString() + "\n";
                        if (sumNeedGrass > productionGrass)
                        {
                            this.lblWrong.Text = j + i + "年之后";
                            break;
                        }
                    }
                    i += 10;
                    initializeNum = sumSheep - initializeNum;
                } while (sumNeedGrass < productionGrass);
            }
        }            
    }
}
