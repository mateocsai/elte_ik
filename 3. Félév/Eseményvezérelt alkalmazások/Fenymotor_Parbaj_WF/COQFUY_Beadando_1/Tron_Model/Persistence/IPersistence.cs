using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tron_Model.Model;

namespace Tron_Model.Persistence
{
    public interface IPersistence
    {
        Player[] Load(String path);
        void Save(String path, Player[] values, int[] a, Direction[] b);
    }
}
