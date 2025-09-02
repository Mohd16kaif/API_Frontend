// SettingsPanel.tsx (Refactored with visual fixes)
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";

export function SettingsPanel() {
  const [settings, setSettings] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    emailAlerts: true,
    spendingAlerts: true,
    weeklyReports: false,
    alertThreshold: "80",
    currency: "USD",
    timezone: "UTC",
  });

  const handleChange = (key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved:", settings);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage preferences and account settings
        </p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Basic account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={settings.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Personalize your experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select
                value={settings.currency}
                onValueChange={(val) => handleChange("currency", val)}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="INR">INR</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select
                value={settings.timezone}
                onValueChange={(val) => handleChange("timezone", val)}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="IST">IST</SelectItem>
                  <SelectItem value="PST">PST</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts & Reports */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Alerts & Reports</CardTitle>
          <CardDescription>
            Control how and when you receive alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch
              checked={settings.emailAlerts}
              onCheckedChange={(val) => handleChange("emailAlerts", val)}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <span>Enable Spending Alerts</span>
            <Switch
              checked={settings.spendingAlerts}
              onCheckedChange={(val) => handleChange("spendingAlerts", val)}
            />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="alertThreshold">Alert Threshold (%)</Label>
            <Select
              value={settings.alertThreshold}
              onValueChange={(val) => handleChange("alertThreshold", val)}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select threshold" />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                <SelectItem value="50">50%</SelectItem>
                <SelectItem value="75">75%</SelectItem>
                <SelectItem value="80">80%</SelectItem>
                <SelectItem value="90">90%</SelectItem>
                <SelectItem value="95">95%</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Receive alerts when usage reaches this percentage of your budget
            </p>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <span>Weekly Reports</span>
            <Switch
              checked={settings.weeklyReports}
              onCheckedChange={(val) => handleChange("weeklyReports", val)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Save and Danger */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={handleSave} className="w-full md:w-auto">
          Save Preferences
        </Button>

        <Button variant="destructive" className="w-full md:w-auto">
          <Trash2 className="h-4 w-4 mr-2" /> Delete Account
        </Button>
      </div>
    </div>
  );
}
