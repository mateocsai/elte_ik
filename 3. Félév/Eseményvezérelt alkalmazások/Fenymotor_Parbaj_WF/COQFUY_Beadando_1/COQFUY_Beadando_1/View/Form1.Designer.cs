namespace COQFUY_Beadando_1
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            menuStrip1 = new MenuStrip();
            gameToolStripMenuItem = new ToolStripMenuItem();
            newGameToolStripMenuItem = new ToolStripMenuItem();
            resumeGameToolStripMenuItem = new ToolStripMenuItem();
            finishGameToolStripMenuItem = new ToolStripMenuItem();
            saveToolStripMenuItem = new ToolStripMenuItem();
            loadGameToolStripMenuItem = new ToolStripMenuItem();
            quitGameToolStripMenuItem = new ToolStripMenuItem();
            difficultyToolStripMenuItem = new ToolStripMenuItem();
            easy1212BoardToolStripMenuItem = new ToolStripMenuItem();
            medium2424BoardToolStripMenuItem = new ToolStripMenuItem();
            hard3636BoardToolStripMenuItem = new ToolStripMenuItem();
            informationOfGameToolStripMenuItem = new ToolStripMenuItem();
            panel1 = new Panel();
            menuStrip1.SuspendLayout();
            SuspendLayout();
            // 
            // menuStrip1
            // 
            menuStrip1.ImageScalingSize = new Size(24, 24);
            menuStrip1.Items.AddRange(new ToolStripItem[] { gameToolStripMenuItem, difficultyToolStripMenuItem, informationOfGameToolStripMenuItem });
            menuStrip1.Location = new Point(0, 0);
            menuStrip1.Name = "menuStrip1";
            menuStrip1.Padding = new Padding(5, 1, 0, 1);
            menuStrip1.Size = new Size(697, 26);
            menuStrip1.TabIndex = 0;
            menuStrip1.Text = "menuStrip1";
            // 
            // gameToolStripMenuItem
            // 
            gameToolStripMenuItem.DropDownItems.AddRange(new ToolStripItem[] { newGameToolStripMenuItem, resumeGameToolStripMenuItem, finishGameToolStripMenuItem, saveToolStripMenuItem, loadGameToolStripMenuItem, quitGameToolStripMenuItem });
            gameToolStripMenuItem.Name = "gameToolStripMenuItem";
            gameToolStripMenuItem.Size = new Size(62, 24);
            gameToolStripMenuItem.Text = "Game";
            gameToolStripMenuItem.Click += Game_Clicked;
            // 
            // newGameToolStripMenuItem
            // 
            newGameToolStripMenuItem.Name = "newGameToolStripMenuItem";
            newGameToolStripMenuItem.Size = new Size(187, 26);
            newGameToolStripMenuItem.Text = "New Game";
            newGameToolStripMenuItem.Click += New_Game;
            // 
            // resumeGameToolStripMenuItem
            // 
            resumeGameToolStripMenuItem.Name = "resumeGameToolStripMenuItem";
            resumeGameToolStripMenuItem.Size = new Size(187, 26);
            resumeGameToolStripMenuItem.Text = "Resume Game";
            resumeGameToolStripMenuItem.Click += Resume_Game;
            // 
            // finishGameToolStripMenuItem
            // 
            finishGameToolStripMenuItem.Name = "finishGameToolStripMenuItem";
            finishGameToolStripMenuItem.Size = new Size(187, 26);
            finishGameToolStripMenuItem.Text = "Finish Game";
            finishGameToolStripMenuItem.Click += Finish_Game;
            // 
            // saveToolStripMenuItem
            // 
            saveToolStripMenuItem.Name = "saveToolStripMenuItem";
            saveToolStripMenuItem.Size = new Size(187, 26);
            saveToolStripMenuItem.Text = "Save Game";
            saveToolStripMenuItem.Click += Save_Game;
            // 
            // loadGameToolStripMenuItem
            // 
            loadGameToolStripMenuItem.Name = "loadGameToolStripMenuItem";
            loadGameToolStripMenuItem.Size = new Size(187, 26);
            loadGameToolStripMenuItem.Text = "Load Game";
            loadGameToolStripMenuItem.Click += Load_Game;
            // 
            // quitGameToolStripMenuItem
            // 
            quitGameToolStripMenuItem.Name = "quitGameToolStripMenuItem";
            quitGameToolStripMenuItem.Size = new Size(187, 26);
            quitGameToolStripMenuItem.Text = "Quit Game";
            quitGameToolStripMenuItem.Click += Quit_Game;
            // 
            // difficultyToolStripMenuItem
            // 
            difficultyToolStripMenuItem.DropDownItems.AddRange(new ToolStripItem[] { easy1212BoardToolStripMenuItem, medium2424BoardToolStripMenuItem, hard3636BoardToolStripMenuItem });
            difficultyToolStripMenuItem.Name = "difficultyToolStripMenuItem";
            difficultyToolStripMenuItem.Size = new Size(83, 24);
            difficultyToolStripMenuItem.Text = "Difficulty";
            // 
            // easy1212BoardToolStripMenuItem
            // 
            easy1212BoardToolStripMenuItem.Checked = true;
            easy1212BoardToolStripMenuItem.CheckState = CheckState.Checked;
            easy1212BoardToolStripMenuItem.Name = "easy1212BoardToolStripMenuItem";
            easy1212BoardToolStripMenuItem.Size = new Size(243, 26);
            easy1212BoardToolStripMenuItem.Text = "Easy (12*12 board)";
            easy1212BoardToolStripMenuItem.Click += Set_Easy_Game;
            // 
            // medium2424BoardToolStripMenuItem
            // 
            medium2424BoardToolStripMenuItem.Name = "medium2424BoardToolStripMenuItem";
            medium2424BoardToolStripMenuItem.Size = new Size(243, 26);
            medium2424BoardToolStripMenuItem.Text = "Medium (24*24 board)";
            medium2424BoardToolStripMenuItem.Click += Set_Medium_Game;
            // 
            // hard3636BoardToolStripMenuItem
            // 
            hard3636BoardToolStripMenuItem.Name = "hard3636BoardToolStripMenuItem";
            hard3636BoardToolStripMenuItem.Size = new Size(243, 26);
            hard3636BoardToolStripMenuItem.Text = "Hard (36*36 board)";
            hard3636BoardToolStripMenuItem.Click += Set_Hard_Game;
            // 
            // informationOfGameToolStripMenuItem
            // 
            informationOfGameToolStripMenuItem.Name = "informationOfGameToolStripMenuItem";
            informationOfGameToolStripMenuItem.Size = new Size(164, 24);
            informationOfGameToolStripMenuItem.Text = "Information Of Game";
            informationOfGameToolStripMenuItem.Click += Information_Of_Game;
            // 
            // panel1
            // 
            panel1.Location = new Point(0, 29);
            panel1.Margin = new Padding(2, 3, 2, 3);
            panel1.MaximumSize = new Size(699, 816);
            panel1.MinimumSize = new Size(699, 816);
            panel1.Name = "panel1";
            panel1.Size = new Size(699, 816);
            panel1.TabIndex = 1;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.ControlDarkDark;
            ClientSize = new Size(697, 753);
            Controls.Add(panel1);
            Controls.Add(menuStrip1);
            MainMenuStrip = menuStrip1;
            Margin = new Padding(2, 3, 2, 3);
            MaximizeBox = false;
            MaximumSize = new Size(715, 800);
            MinimumSize = new Size(715, 800);
            Name = "Form1";
            Text = "TronModel";
            menuStrip1.ResumeLayout(false);
            menuStrip1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private MenuStrip menuStrip1;
        private ToolStripMenuItem gameToolStripMenuItem;
        private ToolStripMenuItem difficultyToolStripMenuItem;
        private ToolStripMenuItem informationOfGameToolStripMenuItem;
        private ToolStripMenuItem newGameToolStripMenuItem;
        private ToolStripMenuItem resumeGameToolStripMenuItem;
        private ToolStripMenuItem finishGameToolStripMenuItem;
        private ToolStripMenuItem easy1212BoardToolStripMenuItem;
        private ToolStripMenuItem medium2424BoardToolStripMenuItem;
        private ToolStripMenuItem hard3636BoardToolStripMenuItem;
        private ToolStripMenuItem saveToolStripMenuItem;
        private ToolStripMenuItem loadGameToolStripMenuItem;
        private ToolStripMenuItem quitGameToolStripMenuItem;
        private Panel panel1;
    }
}