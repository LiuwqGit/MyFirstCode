<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Default3.aspx.cs" Inherits="Default3" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="Calendar/WdatePicker.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div>
       成立日期：<input runat="server" name="txtSTime" id="txtSTime" type="text" style="width:85px" onfocus="WdatePicker({maxDate:'#F{$dp.$D(\'txtETime\')}'})"  />至<input runat="server" name="txtETime" id="txtETime" type="text" style="width:85px" onfocus="WdatePicker({minDate:'#F{$dp.$D(\'txtSTime\')}'})" />
    </div>
    <div>
    <input runat="server" name="adsf" id="txtriqi" value="" type="text" style="width:85px" />
        <asp:Button ID="btnChange" runat="server" Text="改变" onclick="btnChange_Click" />
        <input runat="server" name="txt1" id="txt1" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd'})"/>
    </div>  
</asp:Content>

