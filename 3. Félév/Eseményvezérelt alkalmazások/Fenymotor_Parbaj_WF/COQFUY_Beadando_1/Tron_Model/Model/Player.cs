using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tron_Model.Model
{
    /// <summary>
    /// Player enumerable
    /// </summary>
    public enum Player
    {
        NoOne, LeftPlayer, RightPlayer
    }

    public class PlayerWithCordinates
    {
        /// <summary>
        /// Player x cordinates
        /// </summary>
        public int X { get; set; }
        /// <summary>
        /// Player y cordinates
        /// </summary>
        public int Y { get; set; }
        /// <summary>
        /// Player direction
        /// </summary>
        public Direction Direction { get; set; }
        /// <summary>
        /// PlayerWithCordinates constructor
        /// </summary>
        /// <param name="x"></param>
        /// <param name="y"></param>
        /// <param name="_direction"></param>
        public PlayerWithCordinates(int x, int y, Direction _direction)
        {
            X = x;
            Y = y;
            Direction = _direction;
        }

       

    }
}
