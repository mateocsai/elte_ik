using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tron_Model.Persistence
{
    public class FileManagerExeption : IOException
    {
        /// <summary>
        /// constructor
        /// </summary>
        /// <param name="message"></param>
        public FileManagerExeption(string message) : base(message) { }
    }
}
