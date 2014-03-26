<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
 
</head>
<body>
   <script src="Calendar/WdatePicker.js" type="text/javascript"></script>
    <form id="form1" runat="server">
    <div>
       成立日期：<input runat="server" name="txtSTime" id="txtSTime" type="text" style="width:85px" onfocus="WdatePicker({maxDate:'#F{$dp.$D(\'txtETime\')}'})" value="" />至<input runat="server" name="txtETime" id="txtETime" type="text" style="width:85px" onfocus="WdatePicker({minDate:'#F{$dp.$D(\'txtSTime\')}'})" value=""/>
    </div>
    <div>
    <input runat="server" name="adsf" id="txtriqi" value="" type="text" style="width:85px" />
        <asp:Button ID="btnChange" runat="server" Text="改变" onclick="btnChange_Click" />
    </div>
    </form>
</body>
</html>
