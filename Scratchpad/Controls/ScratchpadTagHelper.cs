using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Scratchpad.Controls
{
    public class ScratchpadTagHelper : TagHelper
    {
        public string Id { get; set; }


        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "textarea";    // Replaces <scratchpad> with <input> tag    
            output.Attributes.SetAttribute("id", Id);

        }

    }
}
