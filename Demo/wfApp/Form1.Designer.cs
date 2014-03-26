namespace wfApp
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.btnOK = new System.Windows.Forms.Button();
            this.lblInfo = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.txtInitializeNum = new System.Windows.Forms.TextBox();
            this.txtProductionGrass = new System.Windows.Forms.TextBox();
            this.txtEverySheepEat = new System.Windows.Forms.TextBox();
            this.txtBirthRate = new System.Windows.Forms.TextBox();
            this.rdbOld = new System.Windows.Forms.RadioButton();
            this.radioButton2 = new System.Windows.Forms.RadioButton();
            this.lblWrong = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btnOK
            // 
            this.btnOK.Location = new System.Drawing.Point(309, 128);
            this.btnOK.Name = "btnOK";
            this.btnOK.Size = new System.Drawing.Size(75, 23);
            this.btnOK.TabIndex = 0;
            this.btnOK.Text = "确定";
            this.btnOK.UseVisualStyleBackColor = true;
            this.btnOK.Click += new System.EventHandler(this.btnOK_Click);
            // 
            // lblInfo
            // 
            this.lblInfo.AutoSize = true;
            this.lblInfo.Location = new System.Drawing.Point(443, 14);
            this.lblInfo.Name = "lblInfo";
            this.lblInfo.Size = new System.Drawing.Size(0, 12);
            this.lblInfo.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 88);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(77, 12);
            this.label1.TabIndex = 3;
            this.label1.Text = "每年产草量：";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(13, 61);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(125, 12);
            this.label2.TabIndex = 4;
            this.label2.Text = "每头羊每年吃草量：：";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(12, 34);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(53, 12);
            this.label3.TabIndex = 5;
            this.label3.Text = "出生率：";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(12, 9);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(65, 12);
            this.label4.TabIndex = 6;
            this.label4.Text = "初始数量：";
            // 
            // txtInitializeNum
            // 
            this.txtInitializeNum.Location = new System.Drawing.Point(152, 5);
            this.txtInitializeNum.Name = "txtInitializeNum";
            this.txtInitializeNum.Size = new System.Drawing.Size(100, 21);
            this.txtInitializeNum.TabIndex = 11;
            // 
            // txtProductionGrass
            // 
            this.txtProductionGrass.Location = new System.Drawing.Point(152, 85);
            this.txtProductionGrass.Name = "txtProductionGrass";
            this.txtProductionGrass.Size = new System.Drawing.Size(100, 21);
            this.txtProductionGrass.TabIndex = 15;
            // 
            // txtEverySheepEat
            // 
            this.txtEverySheepEat.Location = new System.Drawing.Point(152, 58);
            this.txtEverySheepEat.Name = "txtEverySheepEat";
            this.txtEverySheepEat.Size = new System.Drawing.Size(100, 21);
            this.txtEverySheepEat.TabIndex = 16;
            // 
            // txtBirthRate
            // 
            this.txtBirthRate.Location = new System.Drawing.Point(152, 31);
            this.txtBirthRate.Name = "txtBirthRate";
            this.txtBirthRate.Size = new System.Drawing.Size(100, 21);
            this.txtBirthRate.TabIndex = 17;
            // 
            // rdbOld
            // 
            this.rdbOld.AutoSize = true;
            this.rdbOld.Checked = true;
            this.rdbOld.Location = new System.Drawing.Point(277, 12);
            this.rdbOld.Name = "rdbOld";
            this.rdbOld.Size = new System.Drawing.Size(59, 16);
            this.rdbOld.TabIndex = 18;
            this.rdbOld.TabStop = true;
            this.rdbOld.Text = "成年羊";
            this.rdbOld.UseVisualStyleBackColor = true;
            // 
            // radioButton2
            // 
            this.radioButton2.AutoSize = true;
            this.radioButton2.Location = new System.Drawing.Point(381, 12);
            this.radioButton2.Name = "radioButton2";
            this.radioButton2.Size = new System.Drawing.Size(47, 16);
            this.radioButton2.TabIndex = 19;
            this.radioButton2.Text = "幼羊";
            this.radioButton2.UseVisualStyleBackColor = true;
            // 
            // lblWrong
            // 
            this.lblWrong.AutoSize = true;
            this.lblWrong.Location = new System.Drawing.Point(13, 128);
            this.lblWrong.Name = "lblWrong";
            this.lblWrong.Size = new System.Drawing.Size(65, 12);
            this.lblWrong.TabIndex = 2;
            this.lblWrong.Text = "警告信息：";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(531, 428);
            this.Controls.Add(this.radioButton2);
            this.Controls.Add(this.rdbOld);
            this.Controls.Add(this.txtBirthRate);
            this.Controls.Add(this.txtEverySheepEat);
            this.Controls.Add(this.txtProductionGrass);
            this.Controls.Add(this.txtInitializeNum);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.lblWrong);
            this.Controls.Add(this.lblInfo);
            this.Controls.Add(this.btnOK);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnOK;
        private System.Windows.Forms.Label lblInfo;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox txtInitializeNum;
        private System.Windows.Forms.TextBox txtProductionGrass;
        private System.Windows.Forms.TextBox txtEverySheepEat;
        private System.Windows.Forms.TextBox txtBirthRate;
        private System.Windows.Forms.RadioButton rdbOld;
        private System.Windows.Forms.RadioButton radioButton2;
        private System.Windows.Forms.Label lblWrong;
    }
}

