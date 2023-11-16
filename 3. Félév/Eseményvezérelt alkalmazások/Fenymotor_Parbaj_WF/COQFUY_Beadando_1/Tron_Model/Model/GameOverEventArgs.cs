using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tron_Model.Model
{
    public class GameOverEventArgs : EventArgs
    {
        /// <summary>
        /// Player which has wone
        /// </summary>
        public Player Player { get; private set; }
        /// <summary>
        /// Event constructor
        /// </summary>
        /// <param name="player"></param>
        public GameOverEventArgs(Player player)
        {
            Player = player;
        }
    }
}
